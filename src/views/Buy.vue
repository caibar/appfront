<template>
	<v-container fluid>
		<BuyTable :headers="headers" :data="items" />
	</v-container>
</template>

<script>
import BuyTable from "../components/Table";
export default {
	name: "Buy",
	components: { BuyTable },
	data: () => ({
		dialog: false,
		headers: [
			{
				text: "Nome",
				value: "name"
			},
			{
				text: "CEP",
				value: "zip"
			},
			{
				text: "Opções",
				value: "actions",
				sortable: false
			}
		],
		items: [
			{
				name: "telhas",
				zip: 123344
			}
		]
	})
};
</script>
