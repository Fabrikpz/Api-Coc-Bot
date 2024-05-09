const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pajan')
		.setDescription('k ya vere'),
	async execute(interaction) {
		await interaction.reply(`q te pudras imbécil`);
	},
};