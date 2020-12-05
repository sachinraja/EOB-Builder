import json

json_files = ["characters", "items", "perks"]

for file in json_files:
    json_data = {}

    with open(f"app/api/{file}.json", "r") as f:
        json_data = json.load(f)
    
    with open(f"app/api/{file}.json", "w") as f:
        json.dump(json_data, f, indent=4, sort_keys=True)
