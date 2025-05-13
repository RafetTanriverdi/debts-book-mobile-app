import { RootState } from '@/store';
import { Redirect } from 'expo-router';
import { useSelector } from 'react-redux';

export default function RedirectPage() {
  const { session, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return null;
  if (!session) return <Redirect href="/login" />;

  const role = session.user?.user_metadata?.role;

  if (role === 'customer') return <Redirect href="/(customer)" />;
  if (role === 'business') return <Redirect href="/(business)" />;

  return <Redirect href="/login" />;
}
