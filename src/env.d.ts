/// <reference types="astro/client" />

interface User {
    name: string;
    email: string;
    avatar: string;
    emailVerified: boolean;
  }
  
  declare namespace App {
    interface Locals {
      isLoggedIn: boolean;
      user: User | null;
    }
  }
  