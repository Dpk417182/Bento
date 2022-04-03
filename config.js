// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Derrick',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning, ',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'a22b5e306c4155916e6915c54653d0c1', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '28.600',
	defaultLongitude: '-81.200',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	// firstButtonsContainer: [
		// {
		// 	id: '1',
		// 	name: 'Github',
		// 	icon: 'github',
		// 	link: 'https://github.com/',
		// },
	// 	{
	// 		id: '2',
	// 		name: 'Mail',
	// 		icon: 'mail',
	// 		link: 'https://mail.protonmail.com/',
	// 	},
		// {
		// 	id: '3',
		// 	name: 'Todoist',
		// 	icon: 'trello',
		// 	link: 'https://todoist.com',
		// },
	// 	{
	// 		id: '4',
	// 		name: 'Calendar',
	// 		icon: 'calendar',
	// 		link: 'https://calendar.google.com/calendar/r',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'Reddit',
	// 		icon: 'glasses',
	// 		link: 'https://reddit.com',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Odysee',
	// 		icon: 'youtube',
	// 		link: 'https://odysee.com/',
	// 	},
	// ],

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com/',
		},
		{
			id: '3',
			name: 'Whatsapp',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '4',
			name: 'Yahoo',
			icon: 'mail',
			link: 'https://yahoo.com/',
		},
		{
			id: '5',
			name: 'Netflix',
			icon: 'play',
			link: 'https://netflix.com/',
		},
		{
			id: '6',
			name: 'Monkeytype',
			icon: 'keyboard',
			link: 'https://monkeytype.com/',
		},
	],

	// secondButtonsContainer: [
		// {
		// 	id: '1',
		// 	name: 'Music',
		// 	icon: 'headphones',
		// 	link: 'https://open.spotify.com',
		// },
	// 	{
	// 		id: '2',
	// 		name: 'twitter',
	// 		icon: 'twitter',
	// 		link: 'https://twitter.com/',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'bot',
	// 		icon: 'bot',
	// 		link: 'https://discord.com/app',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Amazon',
	// 		icon: 'shopping-bag',
	// 		link: 'https://amazon.com/',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'Hashnode',
	// 		icon: 'pen-tool',
	// 		link: 'https://hashnode.com/',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Figma',
	// 		icon: 'figma',
	// 		link: 'https://figma.com/',
	// 	},
	// ],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'list-checks',
			link: 'https://todoist.com/',
		},
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com/',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'BofA',
			icon: 'landmark',
			link: 'https://.bankofamerica.com/',
		},
		{
			id: '6',
			name: 'Crunchyroll',
			icon: 'japanese-yen',
			link: 'https://crunchyroll.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Oldies',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
