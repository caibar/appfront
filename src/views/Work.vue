<template>
	<v-container fluid>
		<WorkTable :headers="headers" :data="works" @editItem="editWork" @deleteItem="deleteWork" />
		<v-btn fab bottom right color="primary" dark fixed @click="add">
			<v-icon>mdi-plus</v-icon>
		</v-btn>
		<v-dialog v-model="dialog" width="800px">
			<v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
				<v-card dense>
					<v-card-title>Nova Obra</v-card-title>
					<v-card-text>
						<v-text-field v-model="form.name" label="Nome" :rules="rules.name" required></v-text-field>
						<v-text-field
							v-model="form.zip"
							label="CEP"
							:rules="rules.zip"
							counter
							maxlength="8"
							required
						></v-text-field>
						<v-text-field v-model="form.address" label="Rua" :rules="rules.address" required></v-text-field>
						<v-text-field v-model="form.number" label="Número" :rules="rules.number" required></v-text-field>
						<v-text-field v-model="form.district" label="Bairro" :rules="rules.district" required></v-text-field>
						<v-text-field v-model="form.city" label="Cidade" :rules="rules.city" required></v-text-field>
						<v-select v-model="form.state" label="Estado" :items="states" :rules="rules.state" required></v-select>
						<v-textarea v-model="form.info" label="Observação" rows="1" :rules="rules.info" counter="256"></v-textarea>
					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn @click="dialog = false">Cancelar</v-btn>
						<v-btn color="primary" type="onSubmit" :disabled="!valid">Salvar</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-dialog>
		<!-- <WorkForm :dialog="dialog" url="works/" @modal="dialog = $event" /> -->
	</v-container>
</template>

<script>
import WorkTable from "../components/Table";
// import WorkForm from "../components/Form";
export default {
	name: "Work",
	components: { WorkTable },
	data: () => ({
		dialog: false,
		valid: true,
		rules: {
			name: [v => !!v || "Campo nome é obrigatório"],
			zip: [
				v => !!v || "Campo CEP é obrigatório",
				v => (v && v.length <= 8) || "CEP deve ter 8 characters"
			],
			address: [v => !!v || "Campo rua é obrigatório"],
			number: [v => !!v || "Campo número é obrigatório"],
			district: [v => !!v || "Campo bairro é obrigatório"],
			city: [v => !!v || "Campo cidade é obrigatório"],
			state: [v => !!v || "Campo estado é obrigatório"],
			info: [
				v =>
					(v && v.length <= 256) ||
					"Observação deve ter no máximo 256 characters"
			]
		},
		form: {},
		headers: [
			{
				text: "Nome",
				value: "name"
			},
			{
				text: "CEP",
				value: "zip",
				sortable: false
			},
			{
				text: "Rua",
				value: "address",
				sortable: false
			},
			{
				text: "Número",
				value: "number",
				sortable: false
			},
			{
				text: "Bairro",
				value: "district",
				sortable: false
			},
			{
				text: "Cidade",
				value: "city",
				sortable: false
			},
			{
				text: "Opções",
				value: "actions",
				sortable: false
			}
		],
		works: [],
		states: [
			"AC",
			"AL",
			"AP",
			"AM",
			"BA",
			"CE",
			"DF",
			"ES",
			"GO",
			"MA",
			"MT",
			"MS",
			"MG",
			"PA",
			"PB",
			"PR",
			"PE",
			"PI",
			"RJ",
			"RN",
			"RS",
			"RO",
			"RR",
			"SC",
			"SP",
			"SE",
			"TO"
		]
	}),
	methods: {
		add() {
			this.dialog = true;
		},
		editWork(item) {
			this.form = item;
			this.dialog = true;
		},
		deleteWork(item) {
			const index = this.works.indexOf(item);
			confirm("Você tem certesa que quer excluir a obra?") &&
				this.works.splice(index, 1);
		},
		onSubmit() {
			if (this.$refs.form.validate()) {
				this.works.push(this.form);
				this.dialog = false;
			}
		},
		load() {
			this.works = [
				{
					name: "nome da obra 1",
					zip: 88909230,
					address: "Rua Maria",
					number: 1230,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				},
				{
					name: "nome da obra 2",
					zip: 88140000,
					address: "Rua Maria",
					number: 4552,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				},
				{
					name: "nome da obra 3",
					zip: 88140000,
					address: "Rua Maria",
					number: 4552,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				},
				{
					name: "nome da obra 4",
					zip: 88140000,
					address: "Rua Maria",
					number: 4552,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				},
				{
					name: "nome da obra 5",
					zip: 88140000,
					address: "Rua Maria",
					number: 4552,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				},
				{
					name: "nome da obra 6",
					zip: 88140000,
					address: "Rua Maria",
					number: 4552,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				},
				{
					name: "nome da obra 7",
					zip: 88140000,
					address: "Rua Maria",
					number: 4552,
					district: "Bairro",
					city: "Florianópolis",
					state: "SC",
					info: "algum texto..."
				}
			];
		}
		// edit(item) {
		// 	this.form = item;
		// 	this.dialog = true;
		// },
		// update() {
		// 	this.form = {};
		// },
		// async remove(item) {
		// 	if (confirm("Tem certeza que quer excluir?")) {
		// 		const { id } = item;
		// 		try {
		// 			this.works[id];
		// 		} catch (e) {
		// 			console.error(e);
		// 		}
		// 	}
		// }
	},
	mounted() {
		this.load();
	},
	watch: {
		dialog(value) {
			if (!value) {
				this.form = {};
				this.$refs.form.resetValidation();
			}
		}
	}
};
</script>
