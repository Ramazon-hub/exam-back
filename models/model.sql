create database medical_support;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
create table clinics(
    clinic_id  uuid default uuid_generate_v4() primary key,
    clinic_name text not null,
    clinic_adress text not null,
    clinic_phone text [],
    clinic_rate int 
);
create table clinic_category(
    category_id uuid default uuid_generate_v4() primary key,
    category_name text not null,
    clinic_id uuid,
    constraint clinic_ref_category
    foreign key(clinic_id)
    references clinics(clinic_id)
    on delete cascade
);
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
insert into quee(user_id,user_phone,clinic_id,category_id)values('fc02564d-c43a-415e-9534-e25a1ad10c1f','asd','fc02564d-c43a-415e-9534-e25a1ad10c1f','fc02564d-c43a-415e-9534-e25a1ad10c1f');

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