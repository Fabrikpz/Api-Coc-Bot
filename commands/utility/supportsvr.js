const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('official-server')
		.setDescription('join to the official support server'),
	async execute(interaction) {
		await interaction.reply(`ApiCocOne support server: https://discord.gg/u2JAUeU9WJ`);
	},
};