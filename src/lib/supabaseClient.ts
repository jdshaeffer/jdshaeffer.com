import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';

export const supabase = createClient(
	// @ts-ignore
	env.NEXT_PUBLIC_SUPABASE_URL!,
	// @ts-ignore
	env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
