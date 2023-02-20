// @ts-nocheck
import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load = async (event: Parameters<LayoutLoad>[0]) => {
	const { session } = await getSupabase(event);
	return { session };
};
