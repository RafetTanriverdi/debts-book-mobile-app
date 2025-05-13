import { RootState } from '@/store';
import { Redirect, Slot } from 'expo-router';
import { useSelector } from 'react-redux';

export default function AuthLayout() {
  const { session, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return null;
  if (session?.user?.user_metadata?.role === 'customer')
    return <Redirect href="/(customer)" />;
  if (session?.user?.user_metadata?.role === 'business')
    return <Redirect href="/(business)" />;

  return <Slot />;
}
