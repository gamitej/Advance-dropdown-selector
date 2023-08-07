import Select from "@/comp/Select";

const options = [
  { label: "first", value: "first" },
  { label: "second", value: "second" },
  { label: "third", value: "third" },
  { label: "fourth", value: "fourth" },
  { label: "fifth", value: "fifth" },
  { label: "sixth", value: "sixth" },
];

function App() {
  return (
    <div className="flex items-center justify-center h-[10vh]">
      <Select value={""} onChange={() => {}} options={options} />
    </div>
  );
}

export default App;
