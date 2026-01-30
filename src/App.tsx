import { Header } from "./components/layout/header/header.tsx"
import { Footer } from "./components/layout/footer/footer.tsx"
import { Employees } from "./components/features/employee/Employees.tsx"

function App() {

  return (
    <>
      <Header />
      <Employees />
      <Footer />
    </>
  )
}

export default App
