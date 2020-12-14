import enum


class SolveFor(enum.Enum):
    mean = 1,
    median = 2,
    mode = 3,
    dataRange = 4,
    standardDeviation = 5,


class StatisticCall:
    def __init__(self, numberList, solveFor):
        self.numberList = numberList
        self.solveFor = solveFor

    def findMean(self):
        print("work")

    def findMedian(self):
        print("work")

    def findMode(self):
        print("work")

    def findDataRange(self):
        print("work")

    def findStandardDeviation(self):
        print("work")
