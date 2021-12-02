create database medical_support;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
create table clinics(
    clinic_id  uuid default uuid_generate_v4() primary key,
    clinic_name text not null,
    clinic_adress text not null,
    clinic_phone text ,
    clinic_rate int 
);

insert into clinics(clinic_name,clinic_adress,clinic_phone,clinic_rate)values('CityMEd','yunusobod','991337153',5);
insert into clinics(clinic_name,clinic_adress,clinic_phone,clinic_rate)values('Mashhura','termiz','901234567',4);
insert into clinics(clinic_name,clinic_adress,clinic_phone,clinic_rate)values('Guanjo','chilonzor','911234567',3);
insert into clinics(clinic_name,clinic_adress,clinic_phone,clinic_rate)values('Akfa','olmazor','931234567',5);


create table clinic_category(
    category_id uuid default uuid_generate_v4() primary key,
    category_name text not null,
    clinic_id uuid,
    constraint clinic_ref_category
    foreign key(clinic_id)
    references clinics(clinic_id)
    on delete cascade
);
insert into clinic_category(category_name,clinic_id)values('lor','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd');
insert into clinic_category(category_name,clinic_id)values('tish','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd');
insert into clinic_category(category_name,clinic_id)values('urolog','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd');
insert into clinic_category(category_name,clinic_id)values('nevrolog','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd');
insert into clinic_category(category_name,clinic_id)values('psixiatr','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd');
create table users(
    user_id uuid default uuid_generate_v4() primary key,
    user_first_name text not null,
    user_last_name text not null,
    user_email text not null unique,
    user_name text not null,
    password text not null,
    is_admin boolean default false,
    clinic_id uuid default null
    
);
insert into  users(user_first_name,user_last_name,user_email,user_name,password)values('Javahori','Jumanazarov','y@gmail.com','muhiddin','987');
insert into  users(user_first_name,user_last_name,user_email,user_name,password)values('Temur','Jumanazarov','u@gmail.com','asl','236');
insert into  users(user_first_name,user_last_name,user_email,user_name,password)values('Ali','Jumanazarov','p@gmail.com','zafar','852');
insert into  users(user_first_name,user_last_name,user_email,user_name,password)values('Oybek','Jumanazarov','l@gmail.com','asl','456');

create table quee(
    quee_id uuid default uuid_generate_v4() primary key,
    user_id uuid,
    user_phone text not null,
    clinic_id uuid,
    category_id uuid,
    created_at timestamptz default current_timestamp,
    constraint quee_ref_user_id
    foreign key (user_id)
    references users(user_id)
    on delete cascade,
    constraint quee_ref_clinic_id
    foreign key (clinic_id)
    references clinics(clinic_id)
    on delete cascade,
    constraint quee_ref_category
    foreign key (category_id)
    references clinic_category(category_id)
    on delete cascade
);

insert into quee(user_id,user_phone,clinic_id,category_id)values('27cf1a9b-f64e-4408-9ca1-8c065082d437','987','333fe4c3-73ae-442e-93da-810ea9bdec9d','4b925db3-f1a1-436e-bd32-dfe1bfa4e081');
insert into quee(user_id,user_phone,clinic_id,category_id)values('27cf1a9b-f64e-4408-9ca1-8c065082d437','987','333fe4c3-73ae-442e-93da-810ea9bdec9d','4b925db3-f1a1-436e-bd32-dfe1bfa4e081');
insert into quee(user_id,user_phone,clinic_id,category_id)values('fbcfd576-0948-4673-bd45-479184d31b93','987','f44b3c51-0035-4913-9c4f-c0325944d2da','4cd05c1a-2a7c-463e-8f95-032f4481489e');
insert into quee(user_id,user_phone,clinic_id,category_id)values('fbcfd576-0948-4673-bd45-479184d31b93','987','f44b3c51-0035-4913-9c4f-c0325944d2da','4cd05c1a-2a7c-463e-8f95-032f4481489e');
insert into quee(user_id,user_phone,clinic_id,category_id)values('fbcfd576-0948-4673-bd45-479184d31b93','987','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd','4cd05c1a-2a7c-463e-8f95-032f4481489e');
insert into quee(user_id,user_phone,clinic_id,category_id)values('27cf1a9b-f64e-4408-9ca1-8c065082d437','987','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd','3c6a7cba-c77e-4074-9a1c-603ca5e55361');
insert into quee(user_id,user_phone,clinic_id,category_id)values('27cf1a9b-f64e-4408-9ca1-8c065082d437','987','bbbb2da1-2c5a-401c-b5e8-ba3dd11e20fd','3c6a7cba-c77e-4074-9a1c-603ca5e55361');

create table arch_quee(
    arch_id uuid default uuid_generate_v4() primary key,
    user_id uuid,
    user_phone text [] ,
    clinic_id uuid ,
    category_id uuid ,
    writed_quee timestamptz,
    deleted_quee timestamptz default current_timestamp
);
create or replace function delete_arch_quee()
returns trigger
language plpgsql
as
$$
begin
    insert into arch_quee(user_id,user_phone,clinic_id,category_id,writed_quue)values(old.user_id,old.user_phone,old.clinic_id,old.category_id,old.writed_quue);
    return old;
end
$$;
create trigger deleted_quee
before delete
on quee
for each row
execute procedure delete_arch_quee();













insert into arch_quee(user_id,user_phone,clinic_id,category_id,writed_quee)values('fc02564d-c43a-415e-9534-e25a1ad10c1f','asd','fc02564d-c43a-415e-9534-e25a1ad10c1f','fc02564d-c43a-415e-9534-e25a1ad10c1f','asf');

-- /////////////////////////// /        INSERT CLINIC         ////////////////////////////////////
insert into clinics(clinic_name,clinic_adress,clinic_phone,clinic_rate)values('city med','chilonzor',Array[`65`,`54`],4);

-- /////////////////////////// /        INSERT USERS         ////////////////////////////////////

insert into users(user_first_name,user_last_name,user_name,password)values('roma','pardayev','roma0112','asd352d45');
select * from users;
insert into users(user_first_name,user_last_name,user_name,password,is_admin,clinic_id)values('roma','pardayev','roma0112','asd352d45',true,'b920c86a-79cd-42ea-b7e2-3cee584629c9');