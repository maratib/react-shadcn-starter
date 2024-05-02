import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import AdminLayout from "@/layouts/admin-layout";

export default function SettingsPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Settings coming soon ... 👋
          </h2>
          <Button
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              });
            }}
          >
            Toast
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
