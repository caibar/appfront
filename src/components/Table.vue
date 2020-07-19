<template>
	<v-data-table :headers="headers" :items="data">
		<template v-slot:item.actions="{ item }">
			<v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
			<v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
		</template>
	</v-data-table>
</template>

<script>
export default {
	props: {
		headers: {
			type: Array,
			required: true
		},
		data: {
			type: Array,
			required: true
		}
	},
	name: "Table",
	methods: {
		editItem(item) {
			this.$emit("editItem", item);
		},

		deleteItem(item) {
			this.$emit("deleteItem", item);
		}
	}
};
</script>