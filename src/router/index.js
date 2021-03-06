import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/obras",
		name: "Obras",
		component: () => import("../views/Work.vue")
	},
	{
		path: "/compras",
		name: "Compras",
		component: () => import("../views/Buy.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
