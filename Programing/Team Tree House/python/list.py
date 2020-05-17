#!/usr/bin/python3

new_list = []

def add_to_list(item):
    new_list.append(item)
    print ("Added! There are {} items on the list".format(len(new_list)))

    
def show_help():
    print("What should we pick up at the store?")
    print("""
    Enter 'Done' to stop adding items.
    Enter 'Show list' to display list
    Enter help to display help. 
    """)

    
def show_list():
    i = 1
    for item in new_list:
        print("{}: {}".format(i, item))
        i += 1
          
show_help()
while True:
    new_item = input("> ")

    if new_item.lower() == "done" or "doen" or "stop":
        break
    elif new_item.lower() == 'help':
          show_help()
          continue
    elif new_item.lower() == "show list" or "show lists" or "show lst" or "showlist" or "list":
        show_list()
    else:
          add_to_list(new_item)
          
