from tkinter import*

class Calculator:

    def __init__(self, root):
     self.root = root
     self.root.title("Calculator")
     self.root.geometry("600x670+400+100")
     self.root.configure(bg = '#FFC0CB')
     
     from tkinter import font

        # Calea către fișierul font Comfortaa. Specifică calea corectă sau plasează fontul în directorul proiectului.
     comfortaa_font_path = "pythonproject/Comfortaa.ttf"

        # Creează un obiect Font cu fontul Comfortaa
     self.comfortaa_font = font.Font(family="Comfortaa", size=16, weight="bold")

     self.MainFrame = Frame(self.root, bd =18, width=600, height=670, relief=RIDGE, bg='#FFC0CB')
     self.MainFrame.grid()
     self.WidgetFrame = Frame(self.MainFrame, bd=18, width=590, height=660, relief=RIDGE, bg='#FFC0CB')
     self.WidgetFrame.grid()

     self.lblDisplay = Label(self.WidgetFrame, width =30, height= 2, bg="white", font =self.comfortaa_font, anchor='e')
     self.lblDisplay.grid (row =0, column =0, columnspan=4, padx=10, pady=10)

     self.input_button = ""

     self.create_button ("←", 1,0)
     self.create_button ("CE", 1,1)
     self.create_button ("C", 1,2)
     self.create_button ("±", 1,3)

     self.create_button ("7", 2,0)
     self.create_button ("8", 2,1)
     self.create_button ("9", 2,2)
     self.create_button ("+", 2,3)

     self.create_button ("4", 3,0)
     self.create_button ("5", 3,1)
     self.create_button ("6", 3,2)
     self.create_button ("-", 3,3)

     self.create_button ("1", 4,0)
     self.create_button ("2", 4,1)
     self.create_button ("3", 4,2)
     self.create_button ("*", 4,3)

     self.create_button ("0", 5,0)
     self.create_button (".", 5,1)
     self.create_button ("=", 5,2)
     self.create_button ("/", 5,3)

    def create_button(self, text, row, column):
      btnWidget = Button(self.WidgetFrame,text=text, width =6, height=2,bd=4, bg='#FFC0CB', font =self.comfortaa_font,
                         command =lambda:self.button_click(text))
      btnWidget.grid(row =row, column =column, padx=5, pady =5)

    def button_click(self,text):
      
      if text == "←":
          self.input_button = self.input_button[:-1]
      elif text == "CE":
         self.input_button =""
      elif text == "C":
         self.input_button =""

      elif text == "=":
         try:
            self.input_button = str(eval(self.input_button))
         except:
            self.input_button = "Error"
      elif text == "±":
         self.input_button = str(-float(self.input_button))
      else:
         self.input_button += text
      self.lblDisplay.config(text = self.input_button)
      
      



root = Tk()
App = Calculator(root)
root.mainloop()