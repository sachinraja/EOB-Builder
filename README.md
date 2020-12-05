# EOB-Builder
A website for creating and sharing Enemy On Board builds with an API for requesting information about the game.

## Example API Usage with Python
```py
import aiohttp
import asyncio

async def get_character(character):
    async with aiohttp.ClientSession() as session:
        async with session.get("http://eob-builder.herokuapp.com/api", params={"character" : character}) as resp:
            return await resp.json()

loop = asyncio.get_event_loop()

character = loop.run_until_complete(get_character("otto"))
print(character["name"])
```
This will print the name of a valid character (list [here](http://eob-builder.herokuapp.com/info)), "Otto" in this case. Of course, there is a lot of other information that is returned and can be analyzed. Complete documentation of the API is on the [homepage](http://eob-builder.herokuapp.com/info).

## Contributing
  * Pull requests for new features are always welcome.
  * If you have a suggestion or a bug to report, open an issue.
