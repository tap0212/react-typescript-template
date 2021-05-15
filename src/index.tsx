/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/Containers/App';
import ErrorBoundary from 'Components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <ErrorBoundary>
        <Router>
            <App />
        </Router>
    </ErrorBoundary>,
    document.getElementById('root'),
);
