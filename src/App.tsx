import { Button } from "./components/Button";
import { Heading } from "./components/Heading";

function App() {
  return (
    <main className="flex flex-col items-center gap-5 p-10">
      <Heading as="h1" className="text-3xl font-bold">
        React Components (Overview)
      </Heading>
      <Button className="bg-slate-500" type="button">
        I am a button
      </Button>
    </main>
  );
}

export default App;