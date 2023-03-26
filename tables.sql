CREATE TABLE cakes (
	"id" serial NOT NULL PRIMARY KEY,
	"name" varchar(50) NOT NULL UNIQUE,
	"price" numeric NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" TEXT
);

CREATE TABLE clients (
	"id" serial NOT NULL PRIMARY KEY,
	"name" varchar(50) NOT NULL UNIQUE,
	"adress" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL UNIQUE
);

CREATE TABLE orders (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL REFERENCES "clients"("id"),
	"cakeId" integer NOT NULL REFERENCES "cakes"("id"),
	"quantity" integer NOT NULL,
	"totalprice" numeric NOT NULL,
	"createdAt" timestamp without time zone DEFAULT now() NOT NULL
);

_____________________________________________________________________________


CREATE TABLE "public.cakes" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	"price" numeric NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" TEXT,
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.clients" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	"address" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL UNIQUE,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL,
	"cakeId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"totalprice" numeric NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("clientId") REFERENCES "clients"("id");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("cakeId") REFERENCES "cakes"("id");




