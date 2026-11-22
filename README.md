# Estadísticas Sant Pere Bàsquet (PWA)

Aplicación web instalable para anotar estadísticas de partido sin conexión.

- Este repositorio contiene **solo código**. Ningún dato de jugadoras, fotos ni estadísticas se guarda aquí: los datos viven únicamente en el dispositivo (IndexedDB) y en las copias de seguridad que el usuario exporta.
- `/beta/` es la versión de pruebas: usa una base de datos separada (`sp-beta`) y jugadoras ficticias.
- La raíz es la versión principal (base de datos `sp-prod`).
- Publicación automática con GitHub Actions (`build.sh`).
