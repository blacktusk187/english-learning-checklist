import ChecklistCard from "@/app/checklist-card";

export default function Home() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <ChecklistCard />
        </div>
      </div>
  );
}
