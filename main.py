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

    def findMean():
        print("work")

    def findMedian():
        print("work")

    def findMode():
        print("work")

    def findDataRange():
        print("work")

    def findStandardDeviation():
        print("work")
