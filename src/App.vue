<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
			<v-list>
				<v-list-item v-for="item in items" :key="item.text" link>
					<v-list-item-icon>
						<v-icon to="obras">{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ item.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title style="width: 300px" class="ml-0 pl-4">
				<span class="hidden-sm-and-down">Gerenciar Projetos</span>
			</v-toolbar-title>
		</v-app-bar>
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		drawer: null,
		items: [
			{ icon: "mdi-home-city", text: "Obras" },
			{ icon: "mdi-home", text: "Compras" },
			{ icon: "mdi-home", text: "Financeiro" }
		]
	})
};
</script>
