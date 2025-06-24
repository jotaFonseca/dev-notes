# 📝 Dev Notes

## 📚 Sobre o Projeto
Dev Notes é um aplicativo web para criar, organizar e gerenciar anotações de forma prática e eficiente. Com interface moderna e responsiva, permite que desenvolvedores e profissionais mantenham suas ideias sempre acessíveis e organizadas.

## ✨ Funcionalidades

- ➕ **Adicionar Notas**
  - Crie novas anotações rapidamente com um clique ou pressionando Enter
- 📝 **Editar Notas**
  - Edite o conteúdo das notas diretamente na interface
- 📌 **Fixar Notas**
  - Destaque notas importantes fixando-as no topo
- 📄 **Duplicar Notas**
  - Duplique qualquer nota para reutilizar conteúdos
- 🗑️ **Excluir Notas**
  - Remova notas indesejadas de forma simples
- 🔍 **Buscar Notas**
  - Encontre rapidamente qualquer anotação pelo conteúdo
- 📤 **Exportar para CSV**
  - Exporte todas as suas notas em formato CSV
- 💾 **Persistência Local**
  - Suas notas são salvas automaticamente no navegador
- 📱 **Design Responsivo**
  - Interface adaptável para desktop e mobile
- 🎨 **Visual Moderno**
  - Utilização de Bootstrap Icons e Google Fonts

## 🛠️ Tecnologias

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![Bootstrap Icons](https://img.shields.io/badge/-Bootstrap%20Icons-7952B3?style=flat&logo=bootstrap&logoColor=white)
- ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white)

## 🚀 Como Usar

1. **Clone o repositório:**
  ```bash
   git clone https://github.com/seu-usuario/dev-notes.git
  ```
2. **Abra o projeto:**
  ```bash
  cd dev-notes
  code .  # Para abrir no VS Code
  ```
3. **Execute o aplicativo:**
  - Abra o `index.html` em seu navegador;
  - Ou utilize a extensão Live Server no VS Code.

## 📁 Estrutura do Projeto

```plaintext
    dev-notes/
    ├── [index.html](http://_vscodecontentref_/0)
    ├── [README.md](http://_vscodecontentref_/1)
    └── src/
        ├── css/
        │   └── style.css
        └── js/
            └── script.js
```
- **index.html:** Estrutura principal da aplicação;
- **src/css/style.css:** Estilos customizados e responsivos;
- **src/js/script.js:** Toda a lógica de manipulação de notas.

## 🔍 Principais Recursos do Código

```javascript
  // Exemplo: Fixar nota no começo
const toggleFixedNotes = (id) => {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id === id)[0];
  targetNote.fixed = !targetNote.fixed;
  saveNotes(notes);
  showNotes();
};
```

## 🎯 Melhorias Futuras

- [ ] Tema escuro/Claro automático
- [ ] Sincronização com nuvem
- [ ] Compartilhamento de notas
- [ ] Notificações de lembrete
- [ ] Tags e categorias para notas

## 📸 Preview
![Preview do Projeto](./src/img/preview.jpg)

## 🤝 Contribuindo
1. **Faça um Fork do projeto**
2. **Crie sua Feature Branch (git checkout -b feature/MinhaFeature)**
3. **Commit suas mudanças (git commit -m 'Adiciona nova feature')**
4. **Push para a Branch (git push origin feature/MinhaFeature)**
5. **Abra um Pull Request**

---

## Status do Projeto
![Status](https://img.shields.io/badge/Status-Pronto%20para%20Uso-brightgreen)

---

⌨️ Desenvolvido por João Paulo Araújo

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaofonsecaraujo)