/* eslint-disable react-hooks/exhaustive-deps */
import { supabase } from "@/lib/supabase";
import { AppDispatch, store } from "@/store";
import {
  fetchSession,
  setSession,
} from "@/store/authSlice";
import { useEffect } from "react";
import {
  Provider,
  useDispatch,
} from "react-redux";

function AuthBootstrapper() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSession());

    const { data: listener } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {
          dispatch(setSession(session));
        }
      );

    return () =>
      listener.subscription.unsubscribe();
  }, []);

  return null;
}

export default function ReduxProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <Provider store={store}>
      <AuthBootstrapper />
      {children}
    </Provider>
  );
}
