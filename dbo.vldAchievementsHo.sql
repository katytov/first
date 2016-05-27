CREATE TABLE [dbo].[Table]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(250) NULL, 
    [Description] NVARCHAR(500) NULL, 
    [PrizeSetId] INT NULL, 
    [PrizeSetIndex] INT NULL, 
    [IsActive] BIT NULL DEFAULT 0, 
    [QuestId] INT NOT NULL
)
