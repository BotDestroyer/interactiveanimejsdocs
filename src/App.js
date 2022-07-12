import AnimationDirection from './pages/AnimationDirection';
import AnimationLoop from './pages/AnimationLoop';
import Home from './pages/Home';
import './styles/App.css';
import { AppShell, Navbar, Header} from '@mantine/core';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <AppShell
    padding="md"
    navbar={
      <Navbar width={{ base: 300 }} height={500} p="xs">
        <Link to="/home">Home</Link>
        <Link to="/animationDirection">Animation Direction</Link>
        <Link to="/animationLoop">Animation Loop</Link>
      </Navbar>
    
    }
    header={<Header height={60} p="xs">{/* Header content */}</Header>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="animationDirection" element={<AnimationDirection />} />
      <Route path="animationLoop" element={<AnimationLoop />} />
    </Routes>
  </AppShell>
  );
}

export default App;
