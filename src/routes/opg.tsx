import { createFileRoute } from "@tanstack/react-router";
import OpgPage from "@/pages/OpgPage";

// Route publik /opg — portal migrasi sementara (punya token-lock sendiri).
// ⚠️ HAPUS file ini + src/pages/OpgPage.tsx + src/components/OpgEnvViewer.tsx setelah migrasi selesai.
export const Route = createFileRoute("/opg")({
  ssr: false,
  head: () => ({ meta: [{ title: "Migration Toolkit" }] }),
  component: OpgPage,
});
