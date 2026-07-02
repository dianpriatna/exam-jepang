import { supabase } from "$lib/supabase.js";

export async function load() {
  const { data, error } = await supabase.from("soal").select("*");

  if (error) {
    console.error("Gagal ambil soal:", error);
    return { daftarSoal: [] };
  }

  return { daftarSoal: data };
}
