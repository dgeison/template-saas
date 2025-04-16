import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import "server-only";

// Verifica se as variáveis de ambiente estão definidas
if (!process.env.FIREBASE_PRIVATE_KEY_BASE64) {
  throw new Error("FIREBASE_PRIVATE_KEY_BASE64 is not defined");
}
if (!process.env.FIREBASE_PROJECT_ID) {
  throw new Error("FIREBASE_PROJECT_ID is not defined");
}
if (!process.env.FIREBASE_CLIENT_EMAIL) {
  throw new Error("FIREBASE_CLIENT_EMAIL is not defined");
}

// Decodifica a chave privada e ajusta o formato para PEM
const decodedKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, "base64").toString("utf-8");

// Configura as credenciais do Firebase
export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: decodedKey,
});

// Inicializa o Firebase apenas se ainda não estiver inicializado
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
  });
}

// Exporta o Firestore
export const db = getFirestore();
