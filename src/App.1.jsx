import { Navbar } from './components/layout/Navbar/Navbar';
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer';
import { ThemeProvider } from '@emotion/react';
import { customTheme } from './themeConfig';
import { Counter } from './components/common/counter/counter';

export function App() {

    let saludo = "Hola, te damos la bienvenida al Atelier de muebles.";

    return (
        <ThemeProvider theme={customTheme}>
            <Navbar />
            <ItemListContainer saludo={saludo} />
            <Counter />
        </ThemeProvider>
    );
}
