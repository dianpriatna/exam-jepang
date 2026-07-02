import { supabase } from "$lib/supabase.js";
import { redirect } from "@sveltejs/kit";

export async function load() {
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    throw redirect(303, "/login");
  }

  return {};
}
