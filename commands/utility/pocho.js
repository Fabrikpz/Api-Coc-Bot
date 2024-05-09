const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pochin')
		.setDescription('el bea one'),
	async execute(interaction) {
		await interaction.reply(`the chad one`);
	},
};
