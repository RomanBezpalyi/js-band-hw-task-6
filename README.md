# js-band-hw-task-6

**Ciklum University: JS Band Internship. Homework task 6**

The application allows user to note his tasks to do, tracking their progress. To
add your task, push 'Create' button and fill the title, description, and
priority fields. You can update your task's progress status, its title or
description, or delete it via '...' button. All tasks can be filtered using
selects in the content's top part. Also, there is an ability to search a task by
its title using 'Search by title' input.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (Webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Project Structure

```bash
├── assets
│   └── icons
│      └── check-mark.svg
├── components
│   ├── App
│   │   │── App.jsx
│   │   └── index.js
│   ├── ButtonDropdown
│   │   │── ButtonDropdown.jsx
│   │   └── index.js
│   ├── Dashboard
│   │   │── Dashboard.jsx
│   │   └── index.js
│   ├── Footer
│   │   │── Footer.jsx
│   │   └── index.js
│   ├── Form
│   │   ├── PrioritySelect
│   │   │   │── index.js
│   │   │   └── PrioritySelect.jsx
│   │   ├── ProgressSelect
│   │   │   │── index.js
│   │   │   └── ProgressSelect.jsx
│   │   │── Form.jsx
│   │   └── index.js
│   ├── Header
│   │   │── Header.jsx
│   │   └── index.js
│   ├── ItemButton
│   │   │── index.js
│   │   └── ItemButton.jsx
│   ├── Modal
│   │   │── index.js
│   │   └── Modal.jsx
│   ├── pages
│   │   ├── NotFoundPage.jsx
│   │   └── TodosPage.jsx
│   ├──TodoItem
│   │   │── index.js
│   │   └── TodoItem.jsx
│   └── TodoList
│       │── index.js
│       └── TodoList.jsx
├── configs
│   └── index.js
├── helpers
│   ├── filterTodos.js
│   └── putTodoToEditMode.js
├── styles
│   ├── base
│   │   └── normalize.scss
│   ├── components
│   │   ├── dashboard
│   │   │   └── dashboard.scss
│   │   ├── form
│   │   │   └── form.scss
│   │   ├── header
│   │   │   └── header.scss
│   │   ├── list-item
│   │   │   └── list-item.scss
│   │   └── modal
│   │       └── modal.scss
│   └── main.scss
└── index.js
```

Check the demo via link: https://romanbezpalyi.github.io/js-band-hw-task-6/
