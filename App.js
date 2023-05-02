import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRoutes } from './components/routes';


export default function App() {
  return (
    <>
      <AppRoutes />
      <StatusBar style="light" />
    </>
  );
}
