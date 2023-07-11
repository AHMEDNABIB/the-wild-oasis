import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lblbiignvyuopljnuwzj.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibGJpaWdudnl1b3Bsam51d3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MTI5MzYsImV4cCI6MjAwNDQ4ODkzNn0.tWyL5-PImdxo7PVgn0zjF30oTIDewNvSqm64HKX3Sw0";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase; 