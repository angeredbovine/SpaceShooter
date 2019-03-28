/*THIS FILE IS AUTOMATICALLY GENERATED BY Build/BuildWebDB.SH DO NOT TOUCH, HEATHEN
  TO CHANGE THIS FILE, EDIT:

  - Build/Fragments/WebDBHead.jsf for anything occurring before the declaration of DB.master
  
     AND

  - Build/Fragments/WebDBBody.jsf for anything occurring after the declaration of DB.master

  TO ADD ELEMENTS TO THE DB, ADD THE LOCATOR TO Build/WebDBList.txt
*/

function DB()
{

}

DB.Prepare = function()
{

	DB.master =
 	{


"Characters/Player":
{

			"entity":
 			{

				"object":
				{

					"position":
					{

						"x": 100,
						"y": 100

					},
					"shapes":
					[

						{

							"type": "Circle",
							"x": 0,
							"y": 0,
							"radius": 10

						}

					],
					"direction":
					{

						"x": 1,
						"y": 0

					},
					"health": 1,
					"damage": 1,
					"delay": 1000,
					"flag": 1,
					"debug":
					{

						"fill_color": "rgba(0, 255, 0, 0.5)",
						"line_width": 2,
						"line_color": "rgba(255, 255, 255, 0.8)"

					},
					"spritesheet": "Empty"

				},
				"actions":
				[

					{

						"rof": 500,
						"duration": 100,
						"block": true,
						"patternIds":
						[

							"Bullet"

						]

					}

				]

			},
			"vSpeed": 25,
			"hSpeed": 25,
			"forward": 0

		}
,
"Stages/Stage":
{

			"bounds":
			{

				"x": 0,
				"y": 0,
				"width": 3840,
				"height": 1080

			},
			"player_area":
			{

				"x": 0,
				"y": 9,
				"width": 1920,
				"height": 1080

			},
			"in_bounds":
			{

				"x": 0,
				"y": 0,
				"width": 2120,
				"height": 1280

			},
			"mode":
			{

				"mode": 0,
				"scroll":
				{

					"x": "25",
					"y": "0"

				}

			},
			"spawners":
			[

				{

					"x": 1000,
					"y": 200,
					"spawns":
					[

						"Enemy"

					],
					"data":
					[

							{

								"rule": 1,
								"x": 1000,
								"y": 200

							},
							{

								"rule": 4,
								"count": 1

							}

					]

				},
				{

					"x": 3500,
					"y": 700,
					"spawns":
					[

						"Enemy"

					],
					"data":
					[

						{

							"rule": 1,
							"x": 3500,
							"y": 700

						},
						{

							"rule": 2,
							"interval": 5000

						},
						{

							"rule": 4,
							"count": 2

						}

					]

				}

			],
			"victory_data":
			[

				{

					"condition": 1,
					"x": 3839,
					"y": 1

				}

			],
			"debug":
			{

				"player_area":
				{

					"fill_color": "rgba(255, 0, 0, 0.1)",
					"line_width": 4,
					"line_color": "rgba(255, 255, 255, 0.5)"

				},
				"in_bounds":
				{

					"fill_color": "rgba(0, 255, 0, 0.1)",
					"line_width": 4,
					"line_color": "rgba(255, 255, 255, 0.5)"

				},
				"bounds":
				{

					"fill_color": "rgba(0, 0, 255, 0.1)",
					"line_width": 4,
					"line_color": "rgba(255, 255, 255, 0.5)"

				}

			}

		}
,
"Patterns/Bullet":
{

			"pattern":
			{

				"object":
				{

					"position":
					{

						"x": 0,
						"y": 0

					},
					"shapes":
					[

						{

							"type": "Circle",
							"x": 0,
							"y": 0,
							"radius": 3

						}

					],
					"direction":
					{

						"x": 1,
						"y": 0

					},
					"health": 1,
					"damage": 1,
					"delay": 0,
					"flag": 0,
					"debug":
					{

						"fill_color": "rgba(0, 0, 255, 0.5)",
						"line_width": 2,
						"line_color": "rgba(255, 255, 255, 0.8)"

					},
					"spritesheet": "Empty"

				},
				"rule": 1

			},
			"xParam": "50",
			"yParam": "0",
			"angleParam": "0"

		}
,
"Actors/Enemy":
{

			"entity":
			{

				"object":
				{

					"position":
					{

						"x": 0,
						"y": 0

					},
					"shapes":
					[

						{

							"type": "Circle",
							"x": 0,
							"y": 0,
							"radius": 5

						}

					],
					"direction":
					{

						"x": -1,
						"y": 0

					},
					"health": 2,
					"damage": 1,
					"delay": 500,
					"flag": 2,
					"debug":
					{

						"fill_color": "rgba(255, 0, 0, 0.5)",
						"line_width": 2,
						"line_color": "rgba(255, 255, 255, 0.8)"

					},
					"spritesheet": "Empty"

				},
				"actions":
				[
				]

			},
			"ai":
			{

				"movement_x": "-10",
				"movement_y": "0"

			}

		}
,
"Sheets/Empty":
		{

		    "frames": [],
		    "animations": []

		}

	};

}

DB.LoadImage = function(locator, caller)
{

	json = {};

	json.src = "DB/Images/" + locator;

	caller.Populate(json, false);

}

DB.LoadResource = function(locator, caller)
{

	var json = {};

	if(!(locator in DB.master))
	{

		Logger.LogError("Attempting to load unknown resource " + locator);

		return;

	}

	json = DB.master[locator];

	caller.Populate(json, false);

}
