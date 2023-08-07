import Select from "@/comp/Select";
import { useState } from "react";

const options = [
  { label: "first", value: "first" },
  { label: "second", value: "second" },
  { label: "third", value: "third" },
  { label: "fourth", value: "fourth" },
  { label: "fifth", value: "fifth" },
  { label: "sixth", value: "sixth" },
];

function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  return (
    <div className="flex items-center justify-center h-[10vh]">
      <Select value={value} onChange={() => {}} options={options} />
    </div>
  );
}

export default App;
