const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gallo')
		.setDescription('Muestra información acerca de gallo'),
	async execute(interaction) {
		await interaction.reply('the gay one');
	},
};
