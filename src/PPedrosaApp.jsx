import { Home, About, Education, Projects, Contact } from "./pages";
import { NavbarComponent } from "./components/NavbarComponent";
import { AppTheme } from "./theme/Apptheme";
import { CustomThemeProvider } from "./contexts/CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <AppTheme>
        <NavbarComponent />
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </AppTheme>
    </CustomThemeProvider>
  );
}

export default App;
