let routes: any[] = [];

const context = require.context(".", true, /routes.tsx$/);
context.keys().forEach((path)=>{
    routes.push(require(`${path}`).default);
})
const index = routes.indexOf(undefined);
if (index > -1) {
    routes.splice(index, 1);
}

export default routes;