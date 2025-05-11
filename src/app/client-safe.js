"use client";

import React, { useEffect, useState } from "react";

/**
 * Composant qui résout les problèmes d'hydratation en sécurisant le rendu
 * des attributs externes comme data-atm-ext-installed et cz-shortcut-listen
 * qui sont ajoutés par des extensions de navigateur.
 */
export function ClientSafe({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Retarde le rendu jusqu'à ce que le client soit prêt
    setIsMounted(true);

    // Ajoute une fonction pour supprimer manuellement les attributs problématiques
    const cleanupAttributes = () => {
      try {
        const body = document.querySelector("body");
        if (body) {
          // Liste des attributs connus pour causer des problèmes d'hydratation
          const attributesToRemove = [
            "data-atm-ext-installed",
            "cz-shortcut-listen",
            "data-new-gr-c-s-check-loaded",
            "data-gr-ext-installed",
          ];

          // Supprime ces attributs s'ils existent
          attributesToRemove.forEach((attr) => {
            if (body.hasAttribute(attr)) {
              body.removeAttribute(attr);
            }
          });
        }
      } catch (e) {
        console.error("Erreur lors de la suppression des attributs:", e);
      }
    };

    // Exécute une fois après le montage
    cleanupAttributes();

    // Exécute également après un court délai pour attraper les attributs ajoutés tardivement
    const timeout = setTimeout(cleanupAttributes, 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!isMounted) {
    // Rend un placeholer invisible pendant le SSR et le premier rendu client
    return (
      <div
        suppressHydrationWarning={true}
        style={{ display: "none" }}
        aria-hidden="true"
      >
        {children}
      </div>
    );
  }

  // Une fois monté côté client, rend normalement
  return <>{children}</>;
}
