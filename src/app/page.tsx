import StudentTable from "@/components/StudentTable";
import { students } from "@/data/students";

export default function Page() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className=" text-center text-5xl mb-5 ">Lista de Estudantes</h1>
      <StudentTable students={students} />
    </div>
  );
}
