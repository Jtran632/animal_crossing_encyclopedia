import Header from "../components/Header";
import Test from "../components/Test";
import FooterComponent from "../components/Footer";
export default function TestPage() {
  return (
    <div className="flex flex-col bg font-mono">
      <Header />
      <main className="">
        <div className="flex justify-center items-center min-h-screen">
          <Test />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
