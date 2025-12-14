# 🌐 Kairos Website - Instrucciones de Publicación

## 📁 Archivos Creados
- `index.html` - Landing page principal
- `privacy-policy.html` - Política de Privacidad (requerida por Google Play)

## 🚀 Cómo Publicar en GitHub Pages (GRATIS)

### Paso 1: Crear Cuenta en GitHub
1. Ve a: https://github.com/signup
2. Crea una cuenta (usa un email que revises regularmente)
3. Verifica tu email

### Paso 2: Crear Repositorio
1. Una vez logueado, click en el botón verde **"New"** (arriba a la izquierda)
2. Nombre del repositorio: `kairosapp` (o el que prefieras)
3. **Importante:** Marca como **"Public"** (GitHub Pages gratis solo funciona con repos públicos)
4. Click en **"Create repository"**

### Paso 3: Subir Archivos
Tienes dos opciones:

#### Opción A: Desde el navegador (MÁS FÁCIL)
1. En tu nuevo repositorio, click en **"uploading an existing file"**
2. Arrastra `index.html` y `privacy-policy.html` a la ventana
3. Scroll abajo y click en **"Commit changes"**

#### Opción B: Usando Git (si ya lo tienes instalado)
```bash
cd C:\Users\maria\.gemini\kairos-website
git init
git add .
git commit -m "Initial commit - Kairos website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/kairosapp.git
git push -u origin main
```

### Paso 4: Activar GitHub Pages
1. En tu repositorio, ve a **"Settings"** (arriba a la derecha)
2. En el menú lateral, click en **"Pages"**
3. En "Branch", selecciona **"main"** y carpeta **"/ (root)"**
4. Click en **"Save"**
5. ⏳ Espera 1-2 minutos

### Paso 5: ¡Obtener tu URL!
Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/kairosapp/
```

**Política de Privacidad (para Google Play):**
```
https://TU-USUARIO.github.io/kairosapp/privacy-policy.html
```

## ✏️ Personalización Pendiente

### ANTES de publicar en GitHub, reemplaza:
1. **Email de contacto:** Busca `support@twocatdigital.com` en ambos archivos y cámbialo por `twocatdigital.io@gmail.com` (YA REALIZADO)
2. **Link de Google Play:** En `index.html`, reemplaza `#` en el botón con tu URL de Play Store (cuando la tengas)

### Cómo editar archivos:
- Opción 1: Abre con **Bloc de notas** o **Visual Studio Code**
- Opción 2: Edita directamente en GitHub (click en el archivo → botón "Edit")

## 📝 Para Google Play Console

Cuando subas tu app, en la sección **"Política de Privacidad"**:
```
https://TU-USUARIO.github.io/kairosapp/privacy-policy.html
```

## 🎨 Bonus: Vista Previa Local

Para ver cómo se ve ANTES de subir:
1. Navega a `C:\Users\maria\.gemini\kairos-website`
2. Doble click en `index.html`
3. Se abrirá en tu navegador predeterminado

---

## 🆘 ¿Problemas?

Si GitHub Pages no funciona después de 5 minutos:
1. Ve a tu repositorio → Actions → Espera el ✅ verde
2. Revisa que el repo sea **Public** (Settings → General → Danger Zone)

---

**🎉 ¡Listo! Una vez publicado, tendrás tu sitio profesional gratis para siempre.**
