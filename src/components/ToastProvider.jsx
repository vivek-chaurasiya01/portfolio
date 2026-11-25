'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      toastClassName="!bg-white !text-gray-900 !border !border-emerald-600 !shadow-none !rounded-none"
      progressClassName="!bg-emerald-600"
    />
  );
}
