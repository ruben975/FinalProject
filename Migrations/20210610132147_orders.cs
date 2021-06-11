using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FinalProject.Migrations
{
    public partial class orders : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CarId",
                table: "Order",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Order",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CarId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Order");
        }
    }
}
