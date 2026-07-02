export const ssr = false;

import { supabase } from "$lib/supabase.js";
import { redirect } from "@sveltejs/kit";

export async function load() {
  const { data: sessionData } = await supabase.auth.getSession();

  if (!sessionData.session) {
    throw redirect(303, "/login");
  }

  const { data: hasil, error } = await supabase
    .from("hasil_ujian")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal ambil hasil:", error);
    return { daftarHasil: [] };
  }

  return { daftarHasil: hasil };
}
