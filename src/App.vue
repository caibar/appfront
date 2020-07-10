<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
			<v-list dense>
				<template v-for="item in items">
					<v-list-item :key="item.text" link>
						<v-list-item-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>{{ item.text }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title style="width: 300px" class="ml-0 pl-4">
				<span class="hidden-sm-and-down">Gerenciar Projetos</span>
			</v-toolbar-title>
		</v-app-bar>
		<v-main>
			<v-container fluid>
				<!-- If using vue-router -->
				<!-- <router-view></router-view> -->
				<v-simple-table fixed-header height="300px">
					<template v-slot:default>
						<thead>
							<tr>
								<th class="text-left">Nome</th>
								<th class="text-left">Email</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in projects" :key="item.name">
								<td>{{ item.name }}</td>
								<td>{{ item.email }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-container>
		</v-main>
		<v-btn bottom color="green" dark fab fixed right @click="dialog = !dialog">
			<v-icon>mdi-plus</v-icon>
		</v-btn>
		<v-dialog v-model="dialog" width="800px">
			<v-card>
				<v-card-title class="grey darken-2">Criar projeto</v-card-title>
				<v-container>
					<v-row class="mx-2">
						<v-col class="align-center justify-space-between" cols="12">
							<v-row align="center" class="mr-0">
								<v-avatar size="40px" class="mx-3">
									<img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
								</v-avatar>
								<v-text-field placeholder="Nome"></v-text-field>
							</v-row>
						</v-col>
						<v-col cols="6">
							<v-text-field prepend-icon="mdi-account-card-details-outline" placeholder="Empresa"></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field placeholder="Endereço"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field prepend-icon="mdi-mail" placeholder="Email"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field type="tel" prepend-icon="mdi-phone" placeholder="(000) 00000 - 0000"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field prepend-icon="mdi-text" placeholder="Descrição"></v-text-field>
						</v-col>
					</v-row>
				</v-container>
				<v-card-actions>
					<v-btn text color="primary">Mais</v-btn>
					<v-spacer></v-spacer>
					<v-btn text color="primary" @click="dialog = false" v-on:click="addProject()">Cancelar</v-btn>
					<v-btn text @click="dialog = false">Savar</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		dialog: false,
		drawer: null,
		items: [
			{ icon: "mdi-home-city", text: "Projetos" },
			{ icon: "mdi-home", text: "Casa" }
		],
		projects: [
			{
				name: "Frozen Yogurt",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Ice cream sandwich",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Eclair",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Cupcake",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Gingerbread",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Jelly bean",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Lollipop",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Honeycomb",
				email: "empresa@gmail.com.br"
			},
			{
				name: "Donut",
				email: "empresa@gmail.com.br"
			},
			{
				name: "KitKat",
				email: "empresa@gmail.com.br"
			}
		]
	}),
	methods: {
		addProject() {}
	}
};
</script>
