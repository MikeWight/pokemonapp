import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <div>HI</div>
        </ThemeProvider>
    );
}

export default App;
